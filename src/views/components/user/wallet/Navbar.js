import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Nav>
            <div className="page-title">
                <h4>Wallet</h4>
            </div>
            <div className="toggle-switch">
                <button type="button" className="btn btn-primary mb-2 mr-2" data-toggle="modal" href="#fundYourAccount">
                    Fund Wallet
                </button>
            </div>
        </Nav>
    )
}

export default Navbar
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    .toggle-switch{
        margin-top: 10px;
    }
    .search {
        background-color: white;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 8rem 1rem 1rem;
        border-radius: 1.5rem;
        svg{
            color: grey;
        }
        input{
            background-color: transparent;
            border: none;
            color: grey;
            &:focus{
                outline: none;
            }
            &::placeholder {
                color: grey;
            }
        }
    }

`;
