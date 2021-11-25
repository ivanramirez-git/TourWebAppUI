import { ref, Ref } from "vue";
import { Location } from "@/types/location";

export function vm() {
  const location: Ref<Location> = ref({
    id: "001",
    name: "Ivan's Pizza",
    coordinates: "",
    description: "",
    website: "",
    category: "",
    price: 0,
  });

  function cambiarNombre(newName: string) {
    alert(newName);
    location.value.name = newName;
  }
  return {
    location,
    cambiarNombre,
  };
}
