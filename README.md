# Employees

### Requirements

1. Every employee should have a first and last name.
1. Every department should have a name.
1. Every employee should be assigned to either the `FieldOffice` or `Headquarters` department. This is a `has-a` relationship.
1. `Clinician` employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
1. `Operations` employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
1. Every field office should have a unique city.
1. Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
1. Output the following information to the console for each employee.
    1. Full name
    1. Department name
    1. Expertise/responsibility

##### output

```js
Dustin Reed works as a clinician, in the Marshall field office, and is a phrenologist.
Kelly Reed works in operations, in the headquarters, and is responsible for accounting.
Briella Reed works as a clinician, in the Atlanta field office, and is a physical therapist.
Hunter Reed works in operations, in the headquarters, and is responsible for IT.
Blain Reed works as a clinician, in the Tampa field office, and is a anesthesiologist.
```
