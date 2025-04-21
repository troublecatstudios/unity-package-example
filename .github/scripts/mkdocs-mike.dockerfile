FROM squidfunk/mkdocs-material

RUN pip install mkdocs-macros-plugin
RUN pip install mkdocs-glightbox
RUN pip install mkdocs-include-dir-to-nav
RUN pip install markdown-callouts
RUN pip install pillow cairosvg mike

WORKDIR /tmp/source

EXPOSE 8000

ENTRYPOINT [ "/bin/sh", "-c" ]
CMD [ "mike deploy develop" ]
