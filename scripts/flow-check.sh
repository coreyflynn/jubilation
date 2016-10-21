#!/usr/bin/env bash
problems=0
total=0
for file in `find ./src -name "*.js" -or -name "*.jsx"` 
do
  total=$((total+1))
  if [[ `head -1 $file` != "// @flow" ]]; 
  then
      echo "missing '// @flow' in $file"
      problems=$((problems+1))
  fi
done
if [[ "$problems" == 1 ]]; then
  echo "$problems of $total files is unchecked by flow"
  exit 1
elif [[ "$problems" -gt 1 ]]; then
  echo "$problems of $total files are unchecked by flow"
  exit 1
else
  echo "$total of $total files are checked by flow"
  exit 0
fi