#!/usr/bin/env python3
"""
Servidor HTTP simple para Sharky AI Landing Page
Ejecuta: python3 server.py
Luego abre: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Agregar headers de seguridad y cache
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        # Servir index.html por defecto
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 50)
        print("🦈 Sharky AI - Servidor Local Iniciado")
        print("=" * 50)
        print(f"\n✅ Servidor corriendo en: http://localhost:{PORT}")
        print(f"✅ Presiona Ctrl+C para detener el servidor\n")
        print("=" * 50)

        # Abrir el navegador automáticamente
        webbrowser.open(f'http://localhost:{PORT}')

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Servidor detenido. ¡Hasta luego!")
            httpd.shutdown()

if __name__ == "__main__":
    main()
