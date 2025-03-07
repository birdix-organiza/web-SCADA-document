# Usage

## Permission Management

To use Web SCADA features, users need to be added to the corresponding permission group:

1. Go to Odoo Settings menu
2. Select "Users & Companies" > "Users"
3. Find the user that needs authorization and click edit
4. In the Access Rights tab, find the "Web SCADA / SCADA Manager" group
5. Check this permission group
6. Click the save button to complete the setup

Only users added to the SCADA Manager group can create, edit and manage pages.

## Page Management

### Create New Page

1. Find and click the "web_SCADA" module in the Odoo top navigation menu
2. Click the "Create" button in the list view
![Create page](./new_page.png)
3. Fill in the following information in the form view:
   - Page Name: Enter a name for your SCADA page as a unique identifier
   - Other fields (fill in according to actual configuration)
4. Click the "Save" button to complete creation
5. Now you can start [editing page content](./usage/ui-introduction).

### Page Enable Control

Pages are in a disabled state by default after creation. To enable a page, you can toggle the enabled field switch. Disabled pages will not be displayed.
![Enable page](./enabled_switch.png)

### Notes

- All modifications need to be saved by clicking the save button to take effect
- It is recommended to save editing content regularly to avoid accidental loss 