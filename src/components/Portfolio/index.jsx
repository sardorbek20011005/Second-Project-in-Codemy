import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Foto1 from "../../assets/portfolio-img-1.jpg";
import Foto2 from "../../assets/portfolio-img-2.jpg";
import Foto3 from "../../assets/portfolio-img-3.jpg";
import Foto4 from "../../assets/portfolio-img-4.jpg";
import Foto5 from "../../assets/portfolio-img-5.jpg";
import Foto6 from "../../assets/portfolio-img-6.jpg";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default () => {
	return (
		<Box
			sx={{
				width: "100%",
				textAlign: "center",
				mt: { lg: "10%" },
			}}
		>
			<Typography variant="h4">Portfolio</Typography>
			<Typography variant="p">___</Typography>
			<Typography variant="h6">
				our lastest projects in the past 6 months
			</Typography>
			<br />
			<br />
			<br />
			<Button
				variant="contained"
				sx={{
					border: "1px solid grey",
					color: "black",
					backgroundColor: "transparent",
				}}
			>
				All
			</Button>
			<Button
				variant="contained"
				sx={{
					border: "1px solid grey",
					color: "black",
					ml: "1%",
					backgroundColor: "transparent",
				}}
			>
				Graphic
			</Button>
			<Button
				variant="contained"
				sx={{
					border: "1px solid grey",
					color: "black",
					ml: "1%",
					backgroundColor: "transparent",
				}}
			>
				Photoshop
			</Button>
			<Button
				variant="contained"
				sx={{
					border: "1px solid grey",
					color: "black",
					ml: "1%",
					backgroundColor: "transparent",
				}}
			>
				Wallpaper
			</Button>

			<Container>
				<Box sx={{ flexGrow: 1, mt: "5%" }}>
					<Grid container spacing={3} columns={12}>
						<Grid item xs={12} sm={6} md={4}>
							<Item sx={{ boxShadow: "none" }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="240"
										image={Foto1}
									/>
								</Card>
							</Item>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Item sx={{ boxShadow: "none" }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="240"
										image={Foto2}
									/>
								</Card>
							</Item>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Item sx={{ boxShadow: "none" }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="240"
										image={Foto3}
									/>
								</Card>
							</Item>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Item sx={{ boxShadow: "none" }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="240"
										image={Foto4}
									/>
								</Card>
							</Item>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Item sx={{ boxShadow: "none" }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="240"
										image={Foto5}
									/>
								</Card>
							</Item>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Item sx={{ boxShadow: "none" }}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="240"
										image={Foto6}
									/>
								</Card>
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
