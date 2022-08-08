// import React from 'react'

// import Rasm from "../../assets/1.jpg"

// import Box from "@mui/material/Box"
// import { Button, Typography } from '@mui/material'

// export default()=> {
//     return (
//         <Box sx={{
//             width:"100%",
//             height:{lg:"120vh",md:"110vh",sm:"110vh",xs:"120vh"},
//             backgroundImage:`url(${Rasm})`,
//             backgroundSize:{lg:"100%",md:"100%",sm:"100%",xs:"250%"},
//             backgroundRepeat:"no-repeat",
//             textAlign:"center"
//         }}>
//             <Box sx={{
//                 pt:{lg:"20%",md:"25%",sm:"25%",xs:"35%"},
//             }}>
//                 <Typography fontSize={{lg:"30px", md:"30px", sm:"25px", xs:"20px"}} color={'white'} fontWeight={200}>
//                     WEB DESIGN AND DEVELOPMENT
//                 </Typography>
//                 <Typography  fontSize={{lg:"80px", md:"80px", sm:"60px", xs:"40px"}} color={'white'} fontWeight={400}>
//                     DIGITAL STUDIO
//                 </Typography>
//                 <Typography  fontSize={{lg:"60px", md:"60px", sm:"45px", xs:"45px"}} color={'#55acee'} fontWeight={700} >
//                     WEB, MOBILE, UX DESIGN
//                 </Typography>
//                 <Button variant='contained' sx={{backgroundColor:"rgb(0 0 0 / 60%)", borderRadius:"8px",mt:{xs:"10%", sm:"3%",md:"3%"}}}>
//                     Learn more
//                 </Button>
//             </Box>
//         </Box>
//     )
// }

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import R1 from "../../assets/1.jpg";
import R2 from "../../assets/2.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: "San Francisco – Oakland Bay Bridge, United States",
		imgPath: R1,
		title: (
			<Typography
				variant="h3"
				sx={{
					width: { xs: "80%" },
					fontSize: { lg: "35px", md: "30px", sm: "30px", xs: "30px" },
					position: "absolute",
					// left: {lg:"35%",md:"30%",sm:"20%",xs:"15%"},
					top: { lg: "42%", md: "40%", sm: "38%", xs: "30%" },
					color: "white",
				}}
			>
				WEB DESIGN AND DEVELOPMENT
			</Typography>
		),
		title1: (
			<Typography
				variant="h4"
				sx={{
					fontSize: { lg: "80px", md: "80px", sm: "40px", xs: "35px" },
					position: "absolute",
					// left: {lg:"27%",md:"24%",sm:"30%",xs:"10%"},
					top: "48%",
					color: "white",
					fontWeight: "bold",
				}}
			>
				DIGITAL STUDIO
			</Typography>
		),
		title2: (
			<Typography
				variant="h3"
				sx={{
					fontSize: { lg: "60px", md: "55px", sm: "45px", xs: "30px" },
					position: "absolute",
					// left: {lg:"23%",md:"12%",sm:"10%",xs:"10%"},
					top: "62%",
					color: "#55acee",
					fontWeight: "bold",
					width: { xs: "80%" },
					textAlign: "center",
				}}
			>
				WEB, MOBILE, UX DESIGN
			</Typography>
		),
		button: (
			<Button
				variant="contained"
				sx={{
					fontSize: { lg: "15px", md: "20px" },
					position: "absolute",
					background: "none",
					// left: {lg:"44%",md:"44%",sm:"40%",xs:"33%"},
					top: "80%",
					bgcolor: "black",
					opacity: 0.5,
					borderRadius: "20vh",
				}}
			>
				Learn More
			</Button>
		),
	},
	{
		label: "Bird",
		imgPath: R2,
		title: (
			<Typography
				variant="h3"
				sx={{
					position: "absolute",
					top: { lg: "40%", md: "30%", sm: "30%", xs: "30%" },
					fontSize: { lg: "70px", md: "60px", sm: "30px", xs: "30px" },
					// left:{lg:"138%",md:"130%",sm:"140%"},
					width: "100%",
					color: "white",
				}}
			>
				CSS FLEXBOX
			</Typography>
		),
		title1: (
			<Typography
				variant="h4"
				sx={{
					fontSize: { lg: "70px", md: "90px", sm: "50px", xs: "40px" },
					position: "absolute",
					// left: {lg:"137%",md:"125%",sm:"134%"},
					top: { lg: "50%", md: "40%", sm: "40%", xs: "40%" },
					color: "white",
					fontWeight: "bold",
					width: "100%",
				}}
			>
				FLEX SLIDER
			</Typography>
		),
		title2: (
			<Typography
				variant="h3"
				sx={{
					fontSize: { lg: "40px", md: "35px", sm: "30px", xs: "30px" },
					position: "absolute",
					// left: {lg:"138%",md:"130%",sm:"130%"},
					top: { lg: "65%", md: "60%", sm: "55%", xs: "50%" },
					color: "white",
					width: "100%",
				}}
			>
				WEB, MOBILE, UX DESIGN
			</Typography>
		),
		button: (
			<Button
				variant="contained"
				sx={{
					fontSize: { lg: "15px", md: "20px" },
					position: "absolute",
					background: "none",
					// left: {lg:"144%",md:"140%",sm:"145%"},
					top: { lg: "80%", md: "80%", sm: "70%", xs: "80%" },
					bgcolor: "black",
					opacity: 0.5,
				}}
			>
				Learn_More
			</Button>
		),
	},
];

function SwipeableTextMobileStepper() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	return (
		<Box sx={{ maxWidth: "100%", flexGrow: 1, border: "1px solid black" }}>
			<AutoPlaySwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((step, index) => (
					<Box key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box>
								<Box
									component="img"
									sx={{
										height: { lg: 900, md: 700, sm: 500, xs: 500 },
										display: "block",
										maxWidth: "100%",
										overflow: "hidden",
										width: "100%",
									}}
									src={step.imgPath}
									alt={step.label}
								/>
								<Box
									sx={{
										width: "100%",
										height: "100%",
										textAlign: "center",
										margin: "auto",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{step.title}
									{step.title1}
									{step.title2}
									{step.button}
								</Box>
							</Box>
						) : null}
					</Box>
				))}
			</AutoPlaySwipeableViews>
		</Box>
	);
}

export default SwipeableTextMobileStepper;
