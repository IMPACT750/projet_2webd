import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DepartmentCard.module.css";

export interface DepartmentProps {
  departmentId: number;
  displayName: string;
}

export function DepartmentCard({ departmentId, displayName }: DepartmentProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/department/${departmentId}`} className={styles.link}>
      <Card
        className={styles.card}
        style={{
          backgroundColor: isHovered ? "rgba(105, 105, 105, 0.633)" : "white",
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h2"
            className={styles.ellipsis}
            style={{
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: "#333",
              fontSize: "18px",
            }}
          >
            {displayName}
          </Typography>
          {/* Ajoutez d'autres éléments Typography selon vos besoins */}
        </CardContent>
      </Card>
    </Link>
  );
}
