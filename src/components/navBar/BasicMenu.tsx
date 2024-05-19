import React, { useState } from "react";
import {
  Button,
  Menu,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDepartmentsQuery } from "../../queries/department/useDepartments";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [author, setAuthor] = useState("");
  const [department, setDepartment] = useState<string>("");
  const [medium, setMedium] = useState("");
  const [dateBegin, setDateBegin] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const navigate = useNavigate();
  const departments = useDepartmentsQuery();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    let queryString = "";
    if (department) {
      queryString += `departmentId=${department}&`;
    }
    if (medium) {
      queryString += `medium=${medium}&`;
    }
    if (dateBegin) {
      queryString += `dateBegin=${dateBegin}&`;
    }
    if (dateEnd) {
      queryString += `dateEnd=${dateEnd}&`;
    }
    if (author) {
      queryString += `q=${author}&`;
    } else {
      queryString += `q=&`;
    }
    if (queryString.endsWith("&")) {
      queryString = queryString.slice(0, -1);
    }

    navigate(`/searchAdvanced/${encodeURIComponent(queryString)}`);
    setAnchorEl(null);
    setAuthor("");
    setDepartment("");
    setMedium("");
    setDateBegin("");
    setDateEnd("");
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Recherche avancée
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <TextField
            id="Author"
            label="Auteur/Culture"
            variant="standard"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="department-label">Département</InputLabel>
            <Select
              labelId="department-label"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="Département"
            >
              {departments.isLoading ? (
                <MenuItem disabled>Chargement...</MenuItem>
              ) : (
                departments.data!.departments.map((dept) => (
                  <MenuItem key={dept.departmentId} value={dept.departmentId}>
                    {dept.displayName}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
          <TextField
            id="medium"
            label="Moyen"
            variant="standard"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />
          <TextField
            id="dateBegin"
            label="Date début"
            variant="standard"
            value={dateBegin}
            onChange={(e) => setDateBegin(e.target.value)}
          />
          <TextField
            id="dateEnd"
            label="Date fin"
            variant="standard"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </div>
        <Button onClick={handleClose}>Rechercher</Button>
      </Menu>
    </div>
  );
}
