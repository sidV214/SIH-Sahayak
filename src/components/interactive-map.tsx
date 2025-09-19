"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// fix marker icon issue in React using CDN instead of local imports
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Example Issue type
interface Issue {
  id: number;
  title: string;
  coordinates: { lat: number; lng: number };
  status: string;
  urgency: string;
}

// Example issue data (Indore-based)
const mapIssues: Issue[] = [
  {
    id: 1,
    title: "Pothole at Rajwada",
    coordinates: { lat: 22.7196, lng: 75.8577 },
    status: "Open",
    urgency: "High",
  },
  {
    id: 2,
    title: "Broken streetlight near Vijay Nagar",
    coordinates: { lat: 22.7536, lng: 75.8937 },
    status: "In Progress",
    urgency: "Medium",
  },
];

const InteractiveMap = () => {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  return (
    <div className="p-6">
      <Card>
        <CardContent className="p-0 relative">
          <MapContainer
            center={[22.7196, 75.8577]} // Indore as default center
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "500px", width: "100%" }}
            className="rounded-b-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {mapIssues.map((issue) => (
              <Marker
                key={issue.id}
                position={[issue.coordinates.lat, issue.coordinates.lng]}
                eventHandlers={{
                  click: () => setSelectedIssue(issue),
                }}
              >
                <Popup>
                  <strong>{issue.title}</strong>
                  <br />
                  {issue.status} • {issue.urgency}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </CardContent>
      </Card>

      {selectedIssue && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">{selectedIssue.title}</h2>
            <p>Status: {selectedIssue.status}</p>
            <p>Urgency: {selectedIssue.urgency}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InteractiveMap;
