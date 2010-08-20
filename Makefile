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

INJS = ./scripts/jquery.lightbox.js
OUTJS = ./scripts/jquery.lightbox.min.js
INCSS = ./styles/jquery.lightbox.css
OUTCSS = ./styles/jquery.lightbox.min.css

all:
	$(MAKE) build;

clean:
	rm -Rf ./build;
	
build-update:
	$(MAKE) clean;
	mkdir $(BUILDDIR) $(CLOSUREDIR) $(YUIDIR);
	cd $(CLOSUREDIR); wget -q $(CLOSUREURL) -O file.zip; tar -xf file.zip;
	cd $(YUIDIR); wget -q $(YUIURL) -O file.zip; tar -xf file.zip;
	
build:
	$(MAKE) compress;

add:
	git add .gitignore CHECKLIST.txt COPYING.txt demo FDL.txt images Makefile README.txt scripts styles

push:
	git push --all ; git push --tags ;

refresh:
	wget -q http://github.com/balupton/jquery-history/raw/master/demo/styles/generic.css -O demo/styles/generic.css ;

compress:
	java -jar $(CLOSUREFILE) --js_output_file=$(OUTJS) --js=$(INJS);
	java -jar $(YUIFILE) $(INCSS) -o $(OUTCSS);
	