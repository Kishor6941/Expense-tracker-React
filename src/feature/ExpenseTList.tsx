import React, { memo } from "react";
import { ListItem, ListHeader, ListContent, List } from "semantic-ui-react";

const ExpenseTList = (props: any) => {
  return (
    <div className="ml-3">
      <List divided relaxed>
        {props?.expenseList?.length ? props?.expenseList.map((e: any) => (
          <ListItem key={e?.name} className="mb-2 pt-3">
            <ListContent>
              <ListHeader>
                <span className="fs-3">
                  {e?.name} : ₹{e?.amount}
                </span>
              </ListHeader>
            </ListContent>
          </ListItem>
        )) : <h1 className="fw-bolder fs-2">No Item Found</h1>}
      </List>
    </div>
  );
};

export default memo(ExpenseTList);
