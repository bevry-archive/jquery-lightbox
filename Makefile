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

INJS = ./scripts/jquery.lightbox.js
OUTJS = ./scripts/jquery.lightbox.min.js
INCSS = ./styles/jquery.lightbox.css
OUTCSS = ./styles/jquery.lightbox.min.css

all:
	$(MAKE) build;
	$(MAKE) compress;
	$(MAKE) clean;

build:
	$(MAKE) clean;
	mkdir $(BUILDDIR) $(CLOSUREDIR) $(YUIDIR);
	cd $(CLOSUREDIR); wget -q $(CLOSUREURL) -O file.zip; tar -xf file.zip;
	cd $(YUIDIR); wget -q $(YUIURL) -O file.zip; tar -xf file.zip;

add:
	git add CHECKLIST.txt COPYING.txt demo FDL.txt images Makefile README.txt scripts styles

clean:
	rm -Rf ./build;
	
compress:
	java -jar $(CLOSUREFILE) --js_output_file=$(OUTJS) --js=$(INJS);
	java -jar $(YUIFILE) $(INCSS) -o $(OUTCSS);
	