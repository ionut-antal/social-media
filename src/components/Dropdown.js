import React, { useState } from "react";
import {
  Container,
  DropdownButton,
  Icon,
  DropdownList,
  DropdownItem,
} from "./Dropdown.style";

function Dropdown({
  myIcon,
  notificationNumber,
  image,
  image2,
  fullName,
  likeAction,
  fullName2,
  likeAction2,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Container>
      <DropdownButton onClick={toggling}>
        <Icon icon={myIcon} />
        {!!notificationNumber && <span>{notificationNumber}</span>}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownItem>
            {!!image && <img src={image} alt="test" />}
            <div>
              {!!fullName && <p>{fullName}</p>}
              {!!likeAction && <p>{likeAction}</p>}
            </div>
          </DropdownItem>
          <DropdownItem>
            {!!image2 && <img src={image2} alt="test" />}
            <div>
              {!!fullName2 && <p>{fullName2}</p>}
              {!!likeAction2 && <p>{likeAction2}</p>}
            </div>
          </DropdownItem>
          <DropdownItem>
            {!!image && <img src={image} alt="test" />}
            <div>
              {!!fullName && <p>{fullName}</p>}
              {!!likeAction && <p>{likeAction}</p>}
            </div>
          </DropdownItem>
        </DropdownList>
      )}
    </Container>
  );
}

export default Dropdown;
