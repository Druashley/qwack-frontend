import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonContainer } from "../../components/ButtonContainer";

export function SoundboardPage() {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => console.log("WebSocket Connected");
    socket.onmessage = (event) => console.log("Message received:", event.data);
    socket.onerror = (error) => console.error("WebSocket Error:", error);
    socket.onclose = () => console.log("WebSocket Disconnected");

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const audioFiles = [
    { name: "big-load", label: "Big Load", variant: "primary" },
  ];

  const handleButtonClick = (name: string) => {
    let payload = {
      audio: {
        file: name,
      },
      user: {
        name: "John Doe",
      },
    };

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(payload));
    } else {
      console.error("WebSocket not connected");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Soundboard</h1>
      <div>
        <Link to="/">Back to Homepage</Link>
      </div>
      <ButtonContainer>
        {audioFiles.map((audioFile) => (
          <Button
            key={audioFile.name}
            onClick={() => handleButtonClick(audioFile.name)}
            name={audioFile.name}
            label={audioFile.label}
            variant={audioFile.variant as any}
          />
        ))}
      </ButtonContainer>
    </div>
  );
}
