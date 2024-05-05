interface Department {
    departmentId: number;
    displayName: string;
}

export type DepartmentData = {
    departments: Department[];
}