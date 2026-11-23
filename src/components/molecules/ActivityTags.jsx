import { Badge } from '../atoms/Badge';

export function ActivityTags({ actividades }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {actividades.map((actividad) => (
        <Badge key={actividad} variante="sky">
          {actividad}
        </Badge>
      ))}
    </div>
  );
}
