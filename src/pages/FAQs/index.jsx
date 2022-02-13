import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Particles from "react-tsparticles";

export default function FAQs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="grid h-screen overflow-scroll place-items-center bg-blue-200">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="w-[90%]  ">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What can we do with these genetic score models?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            General questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              These genetic score models can be used to predict levels of
              biomelecular traits in genotyped cohorts. The predicted levels can
              be associated with complex phenotypes, which offers as a useful
              tool to investigate the molecular underpinnings of these
              phenotypes. The predicted levels can also allow integrative
              analyses with other available biomelucular traits in the cohort.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How can I download model files of these genetic scores?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            General questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can find a download link (named "Download model files") on the
              Score page of each platform. Following the link, you will be
              directed to a cloud drive page where we hosted model files of all
              the considerred traits for the platform. There is a "Download"
              bottom at right-top corner of the page, which will allow you to
              download all the model files in bulk. Or you can choose the model
              file of a trait you are intersted in and download the particular
              model file in a similar way. Please note that you can only
              download model files of gene expression traits in bulk as we have
              compressed them to a single file.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What method was used for genetic score development and why?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Genetic score development            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The machine learning method Bayesian Ridge (BR), that based on
              individual-level genotype data, was used to construct genetic
              scores of biomelecular traits in the Atlas. The selection of BR is
              based on the results in one of our previous studies that
              benchmarked the performance of a variety of representative genetic
              scoring methods for the construction of numerous continuous
              molecullar traits, and demonstrated BR was the top performing
              method in terms of both efficacy and efficiency.
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How were the genetic variants (i.e. SNPs) selected before feeding
              to the genetic scoring method?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Genetic score development            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To ensure the generalizability of genetic score models when
              applied to other cohorts, a variant filtering step was first
              performed for all the traits considered, which applied a MAF
              threshold of 0.5% and excluded all multi-allelic variants as well
              as ambiguous variants (i.e. A/T, G/C). A follow-up LD thinning
              step was carried out at an r2 threshold of 0.8 on all the
              variants, which aims to remove a certrain level of LD dependencies
              among variants and reduce the computational burden of genetic
              scoring method. The remaining variants were then filtered at the
              genome-wide significance threshold of 5e-8 (based on their GWAS
              summary statistics conducted on the INTERVAL training samples) for
              each trait.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How were traits selected for genetic score development in each
              platform?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Genetic score development               </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We selected traits that have at least one genetic variant with
              p-value 5e-8 in their GWAS (based on the INTERVAL training
              samples) to allow running of the genetic scoring method.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How was the internal validation done?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Genetic score validation            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The INTERVAL training samples of a trait were randomly and equally
              partitioned to five portions, from which any four portions are
              used to learn a genetic score model of the trait with Bayesian
              ridge regression, and the model’s performance was then tested on
              the remaining 20% of INTERVAL training samples, i.e. calculating
              the r2 score and Spearman correlation coefficient between the
              predicted genetic scores and the actual levels of the trait for
              these samples.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How was the external validation done?{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
            Genetic score validation            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The genetic score model trained with INTERVAL training samples for
              a trait was used to calculate genetic scores of the validation
              samples (external cohorts or withheld INTERVAL samples). Then r2
              score and Spearman correlation coefficient were calculated using
              the predicted scores of these samples against their acutal trait
              levels.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
