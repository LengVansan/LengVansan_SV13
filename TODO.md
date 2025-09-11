# TODO: Update Phone Input Validation in Add Delivery Component

## Tasks
- [x] Update phone input pattern to allow +855XXXXXXXX or 0XXXXXXXXX
- [x] Update placeholder to show examples
- [x] Update validation error message to reflect new formats
- [x] Fix comments in code from +885 to +855
- [x] Separate validation messages for required and pattern errors
- [x] Add phone pattern validation in TS add() method to prevent submission with invalid phone
- [x] Add name pattern validation to allow only letters and spaces, show "Name is required." for invalid input

## Details
- Files edited: angularSV13/rithea_final_sv13/src/app/components/add-delivery/add-delivery.component.html and .ts
- New pattern for phone: "^(\\+855\\d{8}|0\\d{9})$"
- New pattern for name: "^[a-zA-Z\s]+$"
- New placeholder: "Input your number phone"
- Error messages: "Phone is required." for empty, "Phone must be in format +855XXXXXXXX or 0XXXXXXXXX." for invalid format
- Added regex check in add() method for phone: if (!this.phone.match(/^(\+855\d{8}|0\d{9})$/)) { alert('Phone must be in format +855XXXXXXXX or 0XXXXXXXXX.'); return; }
- Added regex check in add() method for name: if (!this.name.match(/^[a-zA-Z\s]+$/)) { alert('Name must contain only letters and spaces.'); return; }

---

# TODO: Add Required Validation in List Delivery Update Form

## Tasks
- [x] Add form wrapper with ngSubmit for edit form
- [x] Add required attributes to all input fields
- [x] Add phone pattern validation
- [x] Add validation error messages for each field
- [x] Update TS to include validation checks in update() method
- [x] Fix phone regex pattern in TS
- [ ] Test the edit form validation to ensure errors show when fields are empty

## Details
- Files edited: angularSV13/rithea_final_sv13/src/app/components/list-delivery/list-delivery.component.html and .ts
- Added form with #editFormRef="ngForm" novalidate
- Added required and name attributes to inputs
- Added #input="ngModel" for validation references
- Added *ngIf="input.invalid && editFormRef.submitted" for error messages
- Updated update() to check fields and phone pattern before saving
