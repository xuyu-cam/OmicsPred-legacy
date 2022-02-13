import react from "react";

import Htext from "./components/Htext";
import LinkIcon from "@mui/icons-material/Link";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import Href from "../../Home/components/components/Href";

import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";

import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "blue",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const ScoresHome = (props) => {
  return (
    <>
      <div className="h-auto w-full pb-10 pr-12">
        <Htext text="What is a genetic score ?" />
        <div className="w-full pl-12">
          <Typography className="text-xl text-gray-600 text-justify">
            A genetic score, also called a polygenic score (PGS), polygenic risk
            score (PRS), genetic risk score, or genome-wide score, is a number
            that summarises the estimated effect of many genetic variants
            (usually SNPs) on an individual’s phenotype, typically calculated as
            a weighted sum of trait-associated alleles(
            <Href text="wikipedia" href="/" />
            ).
          </Typography>
        </div>
        <Htext text="What does a genetic score model look like in the Atlas?" />
        <div className="w-full px-12 my-5">
          <Typography className="text-xl text-gray-600 text-justify">
            A genetic score model file presents in the following format:
          </Typography>
          <TableContainer component={Paper} className="my-6">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <LightTooltip title="rsID" arrow placement="top">
                    <TableCell>rsid</TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip title="Chromosome code" arrow placement="top">
                    <TableCell>chr</TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip
                    title="Base-pair coordinate (GRCh37)"
                    arrow
                    placement="top"
                  >
                    <TableCell>pos</TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip
                    title="Effect allele with regard to the dosage of a variant"
                    arrow
                    placement="top"
                  >
                    <TableCell>effect_allele</TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip title="The other allele" arrow placement="top">
                    <TableCell>other_allele</TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip
                    title="Effect size of the variant"
                    arrow
                    placement="top"
                  >
                    <TableCell>effect</TableCell>
                  </LightTooltip>{" "}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Htext text="What does a genetic score model look like in the Atlas?" />
        <div className="w-full px-12 my-5">
          <Typography className="text-xl text-gray-600 text-justify">
            An easy way to calculate genetic scores of a new cohort is to use{" "}
            <Href text="PLINK2" href="/"></Href>. Here is an example:
          </Typography>
          <Typography className="text-xl text-gray-600 text-justify">
            <code className="flex py-1">
              {" "}
              <code className="text-blue-400  font-bold">
                {" "}
                <AssistantPhotoIcon /> bed_file :{" "}
              </code>{" "}
              Plink bed file of genetic data in a new cohort
            </code>

            <code className="flex py-1">
              {" "}
              <code className="text-blue-400 font-bold">
                {" "}
                <AssistantPhotoIcon /> model_file :{" "}
              </code>
              Path for a genetic model file downloaded from the Atlas
            </code>

            <code className="flex py-1">
              {" "}
              <code className="text-blue-400 font-bold">
                {" "}
                <AssistantPhotoIcon /> results :{" "}
              </code>
              Result file path{" "}
            </code>
          </Typography>
          <div>
            <div className="w-full">
              <div className="highlight bg-gray-600 text text-sm rounded-lg">
                <pre className="highlight">
                  <code>
                    <span className="o">$</span> plink2
                    <span className="nt"> --bfile</span>{" "}
                    <span class="k">{"${"}</span>
                    <span className="nv">bed_file</span>
                    <span className="k">{"}"}</span>
                    <span className="nt"> --score</span>{" "}
                    <span class="k">{"${"}</span>
                    <span class="nv">model_file</span>
                    <span class="k">{"}"}</span> 1 4 6 header list-variants{" "}
                    <span class="nv">cols</span>
                    <span class="o">=</span>scoresums
                    <span class="nt"> --out</span> <span class="k">{"${"}</span>
                    <span class="nv">results</span>
                    <span class="k">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoresHome;
