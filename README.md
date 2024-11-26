## Description
- websocket으로 연결된 클라이언트-서버 간의 통신을 구현하는 예제입니다.
- 클라이언트에서 메시지를 입력하고 전송하면, 서버가 해당 메시지를 소문자로 변환하여 다시 클라이언트로 전송합니다. 클라이언트는 수신한 메시지를 화면에 표시합니다.

## Usage
#### Frontend
- 프로젝트 디렉토리로 이동 후 의존성 설치:
```bash
cd frontend
npm install
```

- 서버 실행:
```bash
npm run dev
```

#### Backend
- Flask 및 필요한 라이브러리 설치:
```bash
pip install flask flask-socketio flask-cors
```

- 서버 실행:
```bash
python app.py
```

#### Structure
```
/websocket-chat-example
├── /frontend
└── /backend         
```