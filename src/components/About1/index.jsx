import { Box, Container, Typography } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default () => {
	return (
		<Container>
			<Box
				sx={{
					textAlign: "center",
					mt: "5%",
				}}
			>
				<Typography variant="h2">About</Typography>
				<Typography variant="h2">_____</Typography>
				<Typography variant="h5">some things about our past...</Typography>
				<br />
				<br />

				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} columns={16}>
						<Grid item xs={16} sm={8} md={8} lg={8}>
							<Item sx={{ boxShadow: "none" }}>
								<Typography variant="h4" sx={{ textAlign: "left" }}>
									Studio History
								</Typography>
								<Typography
									variant="body1"
									sx={{ textAlign: "left", mt: "2%" }}
								>
									Phasellus tempus malesuada congue. Sed id est tincidunt,
									iaculis nulla vel, sodales metus. Morbi interdum accumsan
									augue, in accumsan neque lacinia sed. Fusce cursus eu ligula
									ut gravida. Ut tristique hendrerit bibendum. Suspendisse
									euismod sit amet quam et luctus.
								</Typography>
								<Typography
									variant="body1"
									sx={{ textAlign: "left", mt: "4%" }}
								>
									Nulla viverra diam sed justo vehicula, non venenatis massa
									gravida. Nunc efficitur et quam non tempor. Nullam nec nisl
									eget est ultrices elementum nec vel nisl. Cras vestibulum nisl
									vel justo tempor, ut lacinia est accumsan.
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={16} sm={8} md={8} lg={8}>
							<Item sx={{ boxShadow: "none" }}>
								<Typography variant="h6" textAlign={"left"} x>
									BOOTSTRAP 100%
								</Typography>
								<Item sx={{ background: "#55acee" }}></Item>
								<br />
								<Typography variant="h6" textAlign={"left"} x>
									HTML5 & CSS3 90%
								</Typography>
								<Item sx={{ background: "#55acee", width: "90%" }}></Item>
								<br />
								<Typography variant="h6" textAlign={"left"} x>
									WORDPRESS 65%
								</Typography>
								<Item sx={{ background: "#55acee", width: "65%" }}></Item>
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
