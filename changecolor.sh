#!/bin/sh
group1from="#57d4fe"
group2from="#fec157"
group3from="#fef857"
group4from="#fb89fe"
group5from="#94fe89"


# venus
#group1to="#F24998"
#group2to="#27DEF2"
#group3to="#B0D91E"
#group4to="#F2911B"
#group5to="#F2522E"
#helium baloon
#group1to="#6AA690"
#group2to="#F2BC1B"
#group3to="#F2DC99"
#group4to="#F29057"
#group5to="#BF1F1F"
group1to="#D03427"
group2to="#065F85"
group3to="#009490"
group4to="#427738"
group5to="#FF931F"
#color2
group1to="#69A150"
group2to="#6F3E7B"
group3to="#60A4BF"
group4to="#DF70A2"
group5to="#F2DE79"

group1to="#749EE8"
group2to="#E8A674"
group3to="#FFFC80"
group4to="#FE80FF"
group5to="#80FFA2"

git checkout static/img/ktp.svg
sed -i -e 's/'$group1from'/'$group1to'/g' -e 's/'$group2from'/'$group2to'/g' -e 's/'$group3from'/'$group3to'/g' -e 's/'$group4from'/'$group4to'/g' -e 's/'$group5from'/'$group5to'/g' static/img/ktp.svg
