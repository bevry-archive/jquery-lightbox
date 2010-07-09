# Javascript/CSS Compressor Makefile - By Benjamin "balupton" Lupton (MIT Licenced)

MAKEFLAGS = --no-print-directory --always-make
MAKE = make $(MAKEFLAGS)

BUILDDIR = ./build

CLOSUREURL = http://closure-compiler.googlecode.com/files/compiler-latest.zip
CLOSUREDIR = $(BUILDDIR)/closure
CLOSUREFILE = $(CLOSUREDIR)/compiler.jar
YUIURL = http://yuilibrary.com/downloads/yuicompressor/yuicompressor-2.4.2.zip
YUIDIR = $(BUILDDIR)/yui
YUIFILE = $(YUIDIR)/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar


all:
	$(MAKE) pack;
	$(MAKE) compress;
	$(MAKE) add;

add:
	git add Makefile README.txt CHECKLIST.txt ./scripts ./styles;

push:
	git push --all ; git push --tags ;
	
edithooks:
	mate .git/hooks/pre-commit

refresh:
	wget -q http://github.com/balupton/jquery-sparkle/raw/master/scripts/resources/core.array.js -O scripts/resources/core.array.js ;
	wget -q http://github.com/balupton/jquery-sparkle/raw/master/scripts/resources/jquery.balclass.js -O scripts/resources/jquery.balclass.js ;

pack:
	cat \
		./scripts/resources/core.array.js \
		./scripts/resources/jquery.balclass.js \
		./scripts/resources/jquery.balclass.lightbox.js \
		> ./scripts/jquery.lightbox.js;
		
compress:
	$(MAKE) build;
	
	java -jar $(CLOSUREFILE) --js_output_file=./scripts/jquery.lightbox.min.js --js=./scripts/jquery.lightbox.js;
	java -jar $(YUIFILE) ./styles/jquery.lightbox.css -o ./styles/jquery.lightbox.min.css
	
	$(MAKE) clean;

build:
	$(MAKE) clean;
	mkdir $(BUILDDIR) $(CLOSUREDIR) $(YUIDIR);
	cd $(CLOSUREDIR); wget -q $(CLOSUREURL) -O file.zip; tar -xf file.zip;
	cd $(YUIDIR); wget -q $(YUIURL) -O file.zip; tar -xf file.zip;
	
clean:
	rm -Rf ./build;
	