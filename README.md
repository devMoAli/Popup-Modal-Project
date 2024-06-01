# Popup-Modal-Project

![Popup-Modal-Project](Popup-Modal.gif)

State Management:
showModalPopup: A boolean state to control the visibility of the modal.
setShowModalPopup: Function to update showModalPopup.
Functions:
handleToggleModalPopup: Toggles the visibility of the modal.
onClose: Sets showModalPopup to false to close the modal.
JSX:
A button to open the modal, and conditionally renders the PopupModal component if showModalPopup is true.
PopupModal Component:
Props:
id: Optional id for the modal element.
header, body, footer: Content for respective sections.
onClose: Function to close the modal.
JSX:
div with class "modal" contains the modal content.
span element for the close button, calling onClose when clicked.
Sections for header, body, and footer displaying respective content.
