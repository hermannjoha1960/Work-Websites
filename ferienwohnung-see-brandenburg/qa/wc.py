import re,sys,html,urllib.request,ssl
ctx=ssl.create_default_context(cafile='/root/.ccr/ca-bundle.crt')
url=sys.argv[1]
h=urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'qa-wordcount'}),context=ctx).read().decode('utf-8')
i=h.find('</aside>'); j=h.find('<!-- Site Footer -->'); body=h[i:j] if i>0 and j>0 else h
body=re.sub(r'<(script|style|svg)[^>]*>.*?</\1>','',body,flags=re.S)
imgs=re.findall(r'<img[^>]+>',body); noalt=[m for m in imgs if 'alt="' not in m]; nosize=[m for m in imgs if 'width="' not in m]
forms=len(re.findall(r'id="contact-form"',body)); pc=len(re.findall(r'privacy_consent',body))
h1=len(re.findall(r'<h1',body)); h2=len(re.findall(r'<h2',body)); h3=len(re.findall(r'<h3',body))
text=re.sub(r'<[^>]+>',' ',body); text=html.unescape(text); words=[w for w in re.split(r'\s+',text) if re.search(r'\w',w)]
links=set(re.findall(r'href="(/[^"#]*)"',body))
missing=[m for m in re.findall(r'src="(/uploads/[^"]+)"',body)]
print(f"{url}\n words={len(words)} h1={h1} h2={h2} h3={h3} imgs={len(imgs)} noalt={len(noalt)} nosize={len(nosize)} forms={forms} privacy={pc} internal_links={len(links)}")
print(' links:', ' '.join(sorted(links)))
bad=[w for w in ['Kaufpreis','Exposé','Courtage','Makler','Verkauf','Kapitalanlage','SEO','Google','Keyword','Landing Page','Conversion','TODO','Lorem','placeholder','unsplash','TO CONFIRM'] if re.search(r'(?<![\w-])'+re.escape(w)+r'(?![\w-])', text)]
print(' forbidden words:', bad if bad else 'none')
