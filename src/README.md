
1. **Inhalte**
	1. Verzeichnisbaum bildet die Hierachie der Webseite ab
	2. Eingabe als Markdown
	3. Beim Kopieren von Inhalten bleiben Formatierungen wie Überschriften und Aufzählungen erhalten
	4. Verwendung von Templates
	5. Inhaltsgenerierung mit AI
	6. Pasten von Screenshots mit CMD+V
	7. Es gibt eine Änderungshistorie der Inhalte (wer, was, wann)
2. **Zugriffsteuerung**
	1. In Github über Pull Requests
	2. Die Datei CONTRIBUTER bestimmt, wer das Recht hat Pull Request zu mergen
3. **Hosting**
	1. Über *Github Pages*, oder *Azure Static Web Apps* für statische Inhalte kostenlos
	2. Performance: Responsetime < 120ms
	3. Custom Domain bei GitHub kostenlos.
4. **Deployment**
	1. Änderungen im Inhalt werden über git commits markiert und mit `git push`auf den Server übertragen.
	2. Eine Github Action kümmert sich um das Ausrollen der Anwendung. (etwa 2 Minuten)
	3. Rollback durch git möglich, indem man den pointer im main Branch an eine bestimmte setzt1.