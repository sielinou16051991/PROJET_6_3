import React from "react";

export default function Account ({title, accountNumber, accountPrice, subTitle}) {

    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} ({accountNumber})</h3>
                <p className="account-amount">{accountPrice}</p>
                <p className="account-amount-description">{subTitle}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )

}
