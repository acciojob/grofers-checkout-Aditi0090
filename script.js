const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    
    const prices = document.querySelectorAll(".price");

    
    let total = 0;
    prices.forEach(price => {
        total += Number(price.textContent);
    });

   
    const existingTotalRow = document.getElementById("total-row");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = `Total Price: Rs ${total}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
