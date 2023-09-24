import React from "react";
import ResultCommand from "../ResultCommand";

export default function ListResultCommand(props) {
  const { listCommand } = props;

  return (
    <div>
      {listCommand.map((item) => {
        return <ResultCommand key={item.id} data={item} />;
      })}
    </div>
  );
}
