import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Rasm1 from "../../assets/team-img-1.png";
import Rasm2 from "../../assets/team-img-2.png";
import Rasm3 from "../../assets/team-img-3.png";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { Container } from "@mui/system";

export default function ImgMediaCard() {
	return (
		<Container>
			<Box sx={{ flexGrow: 1, mt: "5%" }}>
				<Grid container spacing={1} columns={12}>
					<Grid item xs={12} sm={4}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={Rasm1}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Cindy Davis
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Founder & Director
									</Typography>
								</CardContent>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={Rasm2}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Jenny Meno
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Creative Manager
									</Typography>
								</CardContent>
							</Card>
						</Item>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Item>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									alt="green iguana"
									height="300"
									image={Rasm3}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Catherine Barkley
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Co-Founder & Designer
									</Typography>
								</CardContent>
							</Card>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
