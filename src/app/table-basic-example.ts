import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {
    position: 1,
    name: "mjakubovicz0",
    weight: 39,
    symbol: "L",
  },
  {
    position: 2,
    name: "mstonhewer1",
    weight: 339,
    symbol: "S",
  },
  {
    position: 3,
    name: "ezaniolo2",
    weight: 260,
    symbol: "XS",
  },
  {
    position: 4,
    name: "nruppertz3",
    weight: 305,
    symbol: "XL",
  },
  {
    position: 5,
    name: "gfilewood4",
    weight: 306,
    symbol: "XL",
  },
  {
    position: 6,
    name: "mwoodage5",
    weight: 383,
    symbol: "L",
  },
  {
    position: 7,
    name: "bbirtchnell6",
    weight: 46,
    symbol: "L",
  },
  {
    position: 8,
    name: "tjenno7",
    weight: 88,
    symbol: "3XL",
  },
  {
    position: 9,
    name: "rabramsky8",
    weight: 227,
    symbol: "S",
  },
  {
    position: 10,
    name: "fwillgoose9",
    weight: 139,
    symbol: "L",
  },
  {
    position: 11,
    name: "rkrebera",
    weight: 106,
    symbol: "2XL",
  },
  {
    position: 12,
    name: "sbanbridgeb",
    weight: 408,
    symbol: "3XL",
  },
  {
    position: 13,
    name: "mlarmourc",
    weight: 88,
    symbol: "S",
  },
  {
    position: 14,
    name: "ariglerd",
    weight: 132,
    symbol: "XS",
  },
  {
    position: 15,
    name: "ssandersone",
    weight: 462,
    symbol: "L",
  },
  {
    position: 16,
    name: "jbasindalef",
    weight: 340,
    symbol: "2XL",
  },
  {
    position: 17,
    name: "fleereg",
    weight: 113,
    symbol: "3XL",
  },
  {
    position: 18,
    name: "dgreenstreeth",
    weight: 364,
    symbol: "S",
  },
  {
    position: 19,
    name: "bfineyi",
    weight: 383,
    symbol: "2XL",
  },
  {
    position: 20,
    name: "bfogdenj",
    weight: 286,
    symbol: "XL",
  },
  {
    position: 21,
    name: "gaasafk",
    weight: 212,
    symbol: "XL",
  },
  {
    position: 22,
    name: "dmiddlel",
    weight: 412,
    symbol: "L",
  },
  {
    position: 23,
    name: "vbaniardm",
    weight: 424,
    symbol: "XL",
  },
  {
    position: 24,
    name: "clabinn",
    weight: 314,
    symbol: "L",
  },
  {
    position: 25,
    name: "kgallamoreo",
    weight: 255,
    symbol: "2XL",
  },
  {
    position: 26,
    name: "smerrillp",
    weight: 304,
    symbol: "M",
  },
  {
    position: 27,
    name: "rcolbrunq",
    weight: 157,
    symbol: "L",
  },
  {
    position: 28,
    name: "csebbornr",
    weight: 194,
    symbol: "XS",
  },
  {
    position: 29,
    name: "jsparkwills",
    weight: 195,
    symbol: "L",
  },
  {
    position: 30,
    name: "hstollwerkt",
    weight: 296,
    symbol: "L",
  },
  {
    position: 31,
    name: "epilleru",
    weight: 36,
    symbol: "L",
  },
  {
    position: 32,
    name: "cbulstrodev",
    weight: 364,
    symbol: "2XL",
  },
  {
    position: 33,
    name: "cnisetw",
    weight: 250,
    symbol: "M",
  },
  {
    position: 34,
    name: "kmilburnex",
    weight: 240,
    symbol: "M",
  },
  {
    position: 35,
    name: "gkeefey",
    weight: 65,
    symbol: "L",
  },
  {
    position: 36,
    name: "asturgez",
    weight: 424,
    symbol: "2XL",
  },
  {
    position: 37,
    name: "rcod10",
    weight: 53,
    symbol: "M",
  },
  {
    position: 38,
    name: "ccomi11",
    weight: 379,
    symbol: "M",
  },
  {
    position: 39,
    name: "rchristoffersen12",
    weight: 10,
    symbol: "3XL",
  },
  {
    position: 40,
    name: "jantusch13",
    weight: 139,
    symbol: "L",
  },
  {
    position: 41,
    name: "ggrigore14",
    weight: 448,
    symbol: "M",
  },
  {
    position: 42,
    name: "ldidomenico15",
    weight: 124,
    symbol: "XS",
  },
  {
    position: 43,
    name: "hmurrhaupt16",
    weight: 251,
    symbol: "3XL",
  },
  {
    position: 44,
    name: "jpendall17",
    weight: 132,
    symbol: "2XL",
  },
  {
    position: 45,
    name: "divimy18",
    weight: 453,
    symbol: "S",
  },
  {
    position: 46,
    name: "jtournay19",
    weight: 322,
    symbol: "3XL",
  },
  {
    position: 47,
    name: "edingate1a",
    weight: 457,
    symbol: "M",
  },
  {
    position: 48,
    name: "mattwood1b",
    weight: 102,
    symbol: "2XL",
  },
  {
    position: 49,
    name: "bbosson1c",
    weight: 154,
    symbol: "M",
  },
  {
    position: 50,
    name: "lmawby1d",
    weight: 196,
    symbol: "L",
  },
  {
    position: 51,
    name: "xthirlaway1e",
    weight: 310,
    symbol: "M",
  },
  {
    position: 52,
    name: "djoutapaitis1f",
    weight: 195,
    symbol: "L",
  },
  {
    position: 53,
    name: "gmiere1g",
    weight: 52,
    symbol: "L",
  },
  {
    position: 54,
    name: "dphilpotts1h",
    weight: 355,
    symbol: "XS",
  },
  {
    position: 55,
    name: "knewland1i",
    weight: 321,
    symbol: "M",
  },
  {
    position: 56,
    name: "tberthouloume1j",
    weight: 476,
    symbol: "XS",
  },
  {
    position: 57,
    name: "nslesser1k",
    weight: 404,
    symbol: "M",
  },
  {
    position: 58,
    name: "aclamo1l",
    weight: 182,
    symbol: "3XL",
  },
  {
    position: 59,
    name: "gbass1m",
    weight: 273,
    symbol: "XS",
  },
  {
    position: 60,
    name: "ebargery1n",
    weight: 375,
    symbol: "M",
  },
  {
    position: 61,
    name: "jbaldick1o",
    weight: 429,
    symbol: "2XL",
  },
  {
    position: 62,
    name: "amapowder1p",
    weight: 374,
    symbol: "M",
  },
  {
    position: 63,
    name: "nvallentin1q",
    weight: 392,
    symbol: "L",
  },
  {
    position: 64,
    name: "pgarrish1r",
    weight: 386,
    symbol: "L",
  },
  {
    position: 65,
    name: "mmcgrale1s",
    weight: 495,
    symbol: "3XL",
  },
  {
    position: 66,
    name: "clawling1t",
    weight: 244,
    symbol: "XL",
  },
  {
    position: 67,
    name: "bsabater1u",
    weight: 381,
    symbol: "XL",
  },
  {
    position: 68,
    name: "tvenard1v",
    weight: 381,
    symbol: "XS",
  },
  {
    position: 69,
    name: "hteager1w",
    weight: 269,
    symbol: "3XL",
  },
  {
    position: 70,
    name: "brogerot1x",
    weight: 83,
    symbol: "XS",
  },
  {
    position: 71,
    name: "blangworthy1y",
    weight: 384,
    symbol: "2XL",
  },
  {
    position: 72,
    name: "sblackham1z",
    weight: 84,
    symbol: "M",
  },
  {
    position: 73,
    name: "snathan20",
    weight: 271,
    symbol: "M",
  },
  {
    position: 74,
    name: "zgummow21",
    weight: 376,
    symbol: "S",
  },
  {
    position: 75,
    name: "kstanggjertsen22",
    weight: 204,
    symbol: "M",
  },
  {
    position: 76,
    name: "cvickarman23",
    weight: 265,
    symbol: "S",
  },
  {
    position: 77,
    name: "rchyuerton24",
    weight: 404,
    symbol: "2XL",
  },
  {
    position: 78,
    name: "pisland25",
    weight: 435,
    symbol: "M",
  },
  {
    position: 79,
    name: "nwolledge26",
    weight: 360,
    symbol: "XL",
  },
  {
    position: 80,
    name: "kruit27",
    weight: 334,
    symbol: "3XL",
  },
  {
    position: 81,
    name: "gbownde28",
    weight: 65,
    symbol: "L",
  },
  {
    position: 82,
    name: "fforker29",
    weight: 2,
    symbol: "3XL",
  },
  {
    position: 83,
    name: "dsherer2a",
    weight: 151,
    symbol: "3XL",
  },
  {
    position: 84,
    name: "zcaghy2b",
    weight: 469,
    symbol: "3XL",
  },
  {
    position: 85,
    name: "cdumbrell2c",
    weight: 210,
    symbol: "S",
  },
  {
    position: 86,
    name: "busborn2d",
    weight: 289,
    symbol: "S",
  },
  {
    position: 87,
    name: "zsiddens2e",
    weight: 454,
    symbol: "XL",
  },
  {
    position: 88,
    name: "ceaglen2f",
    weight: 54,
    symbol: "2XL",
  },
  {
    position: 89,
    name: "gtregidgo2g",
    weight: 489,
    symbol: "L",
  },
  {
    position: 90,
    name: "mescoffier2h",
    weight: 494,
    symbol: "XS",
  },
  {
    position: 91,
    name: "hrottcher2i",
    weight: 466,
    symbol: "2XL",
  },
  {
    position: 92,
    name: "mhelliker2j",
    weight: 185,
    symbol: "M",
  },
  {
    position: 93,
    name: "nivain2k",
    weight: 12,
    symbol: "2XL",
  },
  {
    position: 94,
    name: "kdungey2l",
    weight: 275,
    symbol: "XS",
  },
  {
    position: 95,
    name: "tdumberrill2m",
    weight: 213,
    symbol: "L",
  },
  {
    position: 96,
    name: "etaffee2n",
    weight: 269,
    symbol: "M",
  },
  {
    position: 97,
    name: "lhaill2o",
    weight: 197,
    symbol: "L",
  },
  {
    position: 98,
    name: "cmilborn2p",
    weight: 27,
    symbol: "3XL",
  },
  {
    position: 99,
    name: "eemmanueli2q",
    weight: 425,
    symbol: "S",
  },
  {
    position: 100,
    name: "noakenfall2r",
    weight: 200,
    symbol: "XS",
  },

  

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  


  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol'];
  dataSource =new  MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string){
    this.dataSource.filter =filterValue.trim().toLowerCase();
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */