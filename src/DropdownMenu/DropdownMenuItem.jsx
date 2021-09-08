// {       <MenuItem onSelect={() => alert("Download")}>Download</MenuItem>
//         <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>
//         <MenuItem onSelect={() => alert("Mark as Draft")}>
//           Mark as Draft
//         </MenuItem>
//         <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>}


import { MenuItem } from './DropdownMenu.styled';

export const DropdownMenuItem = ({ onSelect, children }) => {
    return (
     <MenuItem onSelect={onSelect}>{ children }</MenuItem>
    )
}
