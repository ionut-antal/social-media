import React, { useState } from "react";
import {
  Container,
  Icon,
  Icon2,
  DrButton,
  DrList,
  DrItem,
} from "./Dropdown.style";
import { Link } from "react-router-dom";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Dropdown2({ logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Container>
      <DrButton onClick={toggling}>
        <Icon icon={faCog} />
      </DrButton>
      {isOpen && (
        <DrList>
          <DrItem>
            <h3>Ionut Antal</h3>
            <ul>
              <li>
                <Link>
                  <Icon2 icon={faUser} />
                  Account
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>
                  <Icon2 icon={faLock} />
                  Security
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link onClick={logout}>
                  <Icon2 icon={faSignOutAlt} />
                  Log out
                </Link>
              </li>
            </ul>
          </DrItem>
        </DrList>
      )}
    </Container>
  );
}

export default Dropdown2;
