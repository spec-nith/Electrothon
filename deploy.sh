#!/bin/sh

git branch --delete --force gh-pages
git push --delete gh-pages
git checkout --orphan gh-pages
git add -f build
git commit -m "Rebuild GitHub pages"
git filter-branch -f --prune-empty --subdirectory-filter build && git push -f origin gh-pages
git checkout main