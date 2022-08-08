import Box from "@mui/material/Box";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import CustomIcon from "../CustomIcon";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default () => {
	const [settings, setSettings] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:3004/settings")
			.then((res) => setSettings(res.data))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Box
			sx={{
				width: { lg: "100%" },
				height: { lg: "100vh" },
				textAlign: "center",
			}}
		>
			<Typography variant="h2" gutterBottom>
				<b>Services</b>
			</Typography>
			<Typography variant="h6" gutterBottom>
				we specialize in web and mobile
			</Typography>
			<Box sx={{ width: "100%", mt: "5%" }}>
				<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{settings.map((val, ind) => {
						return (
							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<Paper
									sx={{
										p: 2,
										margin: "auto",
										maxWidth: 500,
										flexGrow: 1,
										boxShadow: "none",
										backgroundColor: (theme) =>
											theme.palette.mode === "dark" ? "#1A2027" : "#fff",
									}}
								>
									<Grid container spacing={2}>
										<Grid item>
											<ButtonBase
												sx={{
													ml: { xs: "55%", sm: "0%", md: "0%", lg: "15%" },
													mt: { lg: "15%", md: "0%", sm: "0%", xs: "0%" },
													width: 128,
													height: 128,
												}}
											>
												<CustomIcon name={val.icons} />
											</ButtonBase>
										</Grid>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs>
													<Typography
														gutterBottom
														variant="subtitle1"
														component="div"
													>
														<h2>{val.title}</h2>
													</Typography>
													<Typography variant="body2" gutterBottom>
														{val.author}
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
};
