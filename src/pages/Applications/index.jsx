import React from "react";
import "./styles.css";

import { LinkIcon } from "@heroicons/react/outline";
import Htext from "./components/Htext";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}



const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];




export default function Applications() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <div className="min-h-fit w-full  pt-[70px] pb-20">
        <Htext text="Sumarry" />
        <div className="w-auto h-full pl-12  place-content-stretch">
          <div className="min-h-auto">
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <h1 className="text-xl text-gray-600 text-justify">
                <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                  Testing Model for disease
                </h1>

                <h1 className="text-sm h-full grid place-items-center">
                  Age as the time scale Cox regression models (y ~ omics genetic
                  score* + strat(sex) + genotyping array + 10PCs)
                </h1>
              </h1>
            </div>
          </div>

          <div className="min-h-auto">
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <h1 className="text-xl text-gray-600 text-justify">
                <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                  Testing Model for continuous trait
                </h1>
                <h1 className="text-sm h-full grid place-items-center">
                  Ordinary least squares regression (y ~ omics genetic score* +
                  sex + age + clinical center + genotyping array + medication
                  status** + 10PCs)
                </h1>
              </h1>
            </div>
          </div>

          <div className="min-h-auto">
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <h1 className="text-xl text-gray-600 text-justify">
                <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                  Number of phenotypes scanned
                </h1>

                <h1 className="text-sm h-full grid place-items-center">
                  17 (Phenome-wide association scan is coming soon)
                </h1>
              </h1>
            </div>
          </div>

          <div className="min-h-auto">
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <h1 className="text-xl text-gray-600 text-justify">
                <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                  Selection criterion
                </h1>

                <h1 className="text-sm h-full grid place-items-center">
                  FDR-adjusted p-value &#60; 0.05
                </h1>
              </h1>
            </div>
          </div>

          <div className="min-h-auto">
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <h1 className="text-xl text-gray-600 text-justify">
                <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                  Cohort
                </h1>

                <h1 className="text-sm h-full grid place-items-center">
                  UK Biobank
                </h1>
              </h1>
            </div>
          </div>

          <div className="min-h-auto">
            <div className="w-[200px] p-4 rounded-md shadow-md float-left my-5 mr-5">
              <h1 className="text-xl text-gray-600 text-justify">
                <h1 className="text-[15px] w-full text-center  py-3 font-extrabold text-indigo-600">
                  Ancestry
                </h1>

                <h1 className="text-sm h-full grid place-items-center">
                  White British
                </h1>
              </h1>
            </div>
          </div>

          <div className="w-full float-left pr-12">
            <h1 className="text-sm text-gray-600 text-justify">
              * Only traits that had a r2&#60;0.01 in internal validation were
              considerred in the association tests.
            </h1>
            <h1 className="text-sm text-gray-600 text-justify">
              ** Corresponding medication statuses were used as covariates for
              traits applicable.
            </h1>
          </div>
        </div>
        <Htext text="Explore and download omics genetic score-phenotype associations" />
<div className="px-12">
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
</div>
        
      </div>
    </div>
  );
}
