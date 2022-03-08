import React from 'react'
import styled from 'styled-components'
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
// import { BiTransfer } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import Card from './Card';

function Analytic() {
    return (
        <Section>
            <div className="analytic ">
            <div className='record'>
                <div className="design">
                    <div className="logo">
                        <BsCreditCard />
                    </div>
                    <div className="text">
                        <h6>$1200</h6>
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Card Transactions</h6>
                </div>
                </div>
            </div>
            <div className="analytic ">
                <div className='record'>
                <div className="design">
                    <div className="logo">
                        <BsBank />
                    </div>
                    <div className="text">
                        <h6>$1200</h6>
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Bank Transfer</h6>
                </div>
                </div>
            </div>
            <div className="analytic ">
            <div className='record'>
                <div className="design">
                    <div className="logo">
                        <GiTakeMyMoney />
                    </div>
                    <div className="text">
                        <h6>$1200</h6>
                    </div>
                    <div className="action">
                        <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Kardinal Transfer</h6>
                </div>
                </div>
            </div>
            <Card />
            {/* <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <BiTransfer />
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Transfer </h6>
                    <h6>Other Banks</h6>
                </div>
                <div className="money">
                    <h5>$1200</h5>
                </div>
            </div> */}
        </Section>
    )
}

export default Analytic
const Section = styled.section `
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin-top: 20px;
    .analytic {
        justify-content: space-between;
        border-radius: .5rem;
        color: black;
        background-color: white;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s ease-in-out;
        width: 170px;
        .record {
            box-shadow: 0px 5px 20px 0 rgb(0 0 0 / 10%);
            width: inherit;
            border-radius: inherit;
            padding: 5px;
            padding-left: 10px;
            .design{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .logo {
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg {
                        font-size: 2rem;
                    }
                }
                .text{
                    margin-left: 20px;
                    h6{
                        font-size: 14px !important;
                    }
                }
                .action {
                    margin-left: 20px;
                svg{
                    font-size: 1.5rem;
                }
                }

            }
            .transfer {
                margin-top: 5px;
                color: grey;
                width: inherit;
                h6{
                    font-size: 14px !important;
                }
            }
            .money {
                margin-top: 20px;  
            }
        }
    }
`;