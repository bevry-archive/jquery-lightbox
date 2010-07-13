# Javascript/CSS Compressor Makefile - By Benjamin "balupton" Lupton (MIT Licenced)

MAKEFLAGS = --no-print-directory --always-make
MAKE = make $(MAKEFLAGS)

BUILDDIR = ./.build

CLOSUREURL = http://closure-compiler.googlecode.com/files/compiler-latest.zip
CLOSUREDIR = $(BUILDDIR)/closure
CLOSUREFILE = $(CLOSUREDIR)/compiler.jar
YUIURL = http://yuilibrary.com/downloads/yuicompressor/yuicompressor-2.4.2.zip
YUIDIR = $(BUILDDIR)/yui
YUIFILE = $(YUIDIR)/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar


all:
	$(MAKE) build;
	$(MAKE) add;


demo:
	open ./demo/index.html

add:
	git add .gitignore CHECKLIST.txt COPYING.txt demo FDL.txt images Makefile README.txt scripts styles

push:
	git push --all ; git push --tags ;
	
edithooks:
	mate .git/hooks/pre-commit


refresh:
	wget -q http://github.com/balupton/jquery-sparkle/raw/master/scripts/resources/core.array.js -O scripts/resources/core.array.js ;
	wget -q http://github.com/balupton/jquery-sparkle/raw/master/scripts/resources/core.console.js -O scripts/resources/core.console.js ;
	wget -q http://github.com/balupton/jquery-sparkle/raw/master/scripts/resources/core.string.js -O scripts/resources/core.string.js ;
	wget -q http://github.com/balupton/jquery-sparkle/raw/master/scripts/resources/jquery.balclass.js -O scripts/resources/jquery.balclass.js ;


pack:
	cat \
		./scripts/resources/core.array.js \
		./scripts/resources/core.console.js \
		./scripts/resources/core.string.js \
		./scripts/resources/jquery.balclass.js \
		./scripts/resources/jquery.balclass.lightbox.js \
		> ./scripts/jquery.lightbox.js;
		
compress:
	java -jar $(CLOSUREFILE) --js_output_file=./scripts/jquery.lightbox.min.js --js=./scripts/jquery.lightbox.js;
	java -jar $(YUIFILE) ./styles/jquery.lightbox.css -o ./styles/jquery.lightbox.min.css

build:
	$(MAKE) pack;
	$(MAKE) compress;
	
build-update:
	$(MAKE) clean;
	mkdir $(BUILDDIR) $(CLOSUREDIR) $(YUIDIR);
	cd $(CLOSUREDIR); wget -q $(CLOSUREURL) -O file.zip; tar -xf file.zip;
	cd $(YUIDIR); wget -q $(YUIURL) -O file.zip; tar -xf file.zip;
	
clean:
	rm -Rf $(BUILDDIR);
	