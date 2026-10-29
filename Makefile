.PHONY: dev build preview install local deploy

SHELL := /bin/bash

NVM = . $(NVM_DIR)/nvm.sh && nvm use --silent &&

-include .env

dev:
	$(NVM) npm run dev

build:
	$(NVM) npm run build

preview:
	$(NVM) npm run preview

install:
	$(NVM) npm ci

local:
	rm -rf node_modules/@jochenklar/maps node_modules/.vite
	$(NVM) npm install --no-save --install-links ../maps

deploy: build
	@[[ "$(DEPLOY)" == ?*:?* ]] || { echo 'DEPLOY must be host:/path'; exit 1; }
	rsync -av --delete dist/ $(DEPLOY)
