import React, { memo } from "react";

const ExpenseTCount = (props:any) => {
    let totalAmount = props?.expenseList?.reduce((a:any,c:any) => {
        return a + Number(c?.amount)
    },0)
  return (
    <div>
      <h1 className="text-center fw-bolder fs-1 pb-4"> Total : ₹ {totalAmount}</h1>
    </div>
  );
};

export default memo(ExpenseTCount);
