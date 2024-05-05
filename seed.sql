USE workDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Education");
INSERT INTO department (name)
VALUES ("Visitor Experience");
INSERT INTO department (name)
VALUES ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 85000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Educator", 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Box Office Lead", 37000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Security", 42000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Technology Officer", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Littlefield", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Amber", "Desmoines", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dylan", "Smallman", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Austin", "Denver", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Wax", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Quesada", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oliver", "Moody", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elizabeth", "Chan", 1, 2);