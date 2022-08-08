import { Button, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

import Rasm from "../../assets/divider-bg.jpg";

export default () => {
	return (
		<Box
			className="vv"
			sx={{
				height: { lg: "60vh", xs: "33vh", sm: "50vh" },
				backgroundImage: `url(${Rasm})`,
				mt: "2%",
				backgroundAttachment: { xs: "none", sm: "fixed", lg: "fixed" },
				backgroundRepeat: "no-repeat",
				pt: { xs: "2%" },
				filter: "brightness(0.5)",
				backgroundSize: "100%",
				textAlign: "center",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					color: "#ffffff",
					pt: { lg: "10%", md: "15%", sm: "15%", xs: "2%" },
					fontSize: { xs: "20px" },
				}}
				gutterBottom
			>
				THE BEST MINIMAL CORPORATE PAGE
			</Typography>
			<Typography sx={{ color: "#ffffff" }} variant="h6">
				This is fully responsive, clean, modern, creative, and minimal.
			</Typography>
			<Button
				variant="contained"
				sx={{
					backgroundColor: "transparent",
					border: "1px solid white",
					borderRadius: "2vh",
					mt: { lg: "4%" },
				}}
			>
				Download
			</Button>
		</Box>
	);
};
