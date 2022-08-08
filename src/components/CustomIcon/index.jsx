import React from "react";
import Icon from "@mui/material/Icon";

export default ({ name }) => {
	return (
		<Icon
			style={{
				color: "#55acee",
				padding: "15px",
				fontSize: "500%",
			}}
		>
			{name}
		</Icon>
	);
};
