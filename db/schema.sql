
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department
(
    id int NOT NULL
    AUTO_INCREMENT,
	name varchar
    (255) NOT NULL,
	PRIMARY KEY
    (id)
);

    CREATE TABLE role
    (
        id int NOT NULL
        AUTO_INCREMENT,
    title VARCHAR
        (45) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department
    FOREIGN KEY
        (department_id)
    REFERENCES department
        (id),
    PRIMARY KEY
        (id)
);

        CREATE TABLE employee
        (
            id int NOT NULL
            AUTO_INCREMENT,
first_name VARCHAR
            (45) NOT NULL,
last_name VARCHAR
            (45) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
CONSTRAINT fk_role
FOREIGN KEY
            (role_id)
REFERENCES role
            (id),
CONSTRAINT fk_manager
FOREIGN KEY
            (manager_id)
REFERENCES employee
            (id),
PRIMARY KEY
            (id)
)
