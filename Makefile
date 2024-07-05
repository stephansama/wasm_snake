VERSION=0.1
NAME=wasm-snake
NPM=pnpm
BUILD_RS=cargo build --release --target wasm32-unknown-unknown && \
		 wasm-bindgen --out-name wasm_snake \
		 --out-dir pkg \
		 --target web target/wasm32-unknown-unknown/release/wasm_snake.wasm

run:
	cargo run

watch:
	$(NPM) run dev & cargo watch -i .gitignore -i "client/*" -i "pkg/*" -s "$(BUILD_RS)"

install:
	$(NPM) install

build: install
	$(BUILD_RS) && $(NPM) run build

clean:
	rm -rf pkg dist target node_modules

