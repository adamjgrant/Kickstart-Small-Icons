build:
	@echo "Generating SVGs"
	@./build.rb

	@echo "Compiling assets to /public"
	@gulp
