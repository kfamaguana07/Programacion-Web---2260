// Clase Conductor
class Conductor {
    #licencia; 
  
    constructor(nombre, licencia) {
      this.nombre = nombre;
      this.#licencia = licencia;
      this.rutas = [];
    }
  
    registrarRuta(ruta) {
      this.rutas.push(ruta);
      console.log(`Ruta ${ruta.obtenerDetalle()} registrada para el conductor ${this.nombre}`);
    }
  
    obtenerDetalle() {
      return `Conductor: ${this.nombre}, Licencia: ${this.#licencia}`;
    }
  }
  
  // Clase Vehiculo
  class Vehiculo {
    #placa; 
  
    constructor(modelo, placa) {
      this.modelo = modelo;
      this.#placa = placa;
      this.estado = 'disponible';
    }
  
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
      console.log(`El vehículo ${this.modelo} ahora está ${nuevoEstado}`);
    }
  
    obtenerInfo() {
      return `Modelo: ${this.modelo}, Placa: ${this.#placa}, Estado: ${this.estado}`;
    }
  }
  
  // Clase Ruta
  class Ruta {
    constructor(origen, destino, duracionEstimada) {
      this.origen = origen;
      this.destino = destino;
      this.duracionEstimada = duracionEstimada;
      this.conductorAsignado = null;
    }
  
    asignarConductor(conductor) {
      this.conductorAsignado = conductor;
      conductor.registrarRuta(this);
    }
  
    obtenerDetalle() {
      return `${this.origen} - ${this.destino}, Duración Estimada: ${this.duracionEstimada} horas`;
    }
  }
  
  // Clase ConductorVIP (herencia de Conductor)
  class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
      super(nombre, licencia);
      this.vehiculoPreferido = null;
    }
  
    asignarVehiculoPreferido(vehiculo) {
      this.vehiculoPreferido = vehiculo;
      console.log(`${this.nombre} ha asignado el vehículo preferido: ${vehiculo.obtenerInfo()}`);
    }
  
    obtenerDetalle() {
      const detalleBase = super.obtenerDetalle();
      const vehiculoInfo = this.vehiculoPreferido ? this.vehiculoPreferido.obtenerInfo() : 'Sin vehículo preferido';
      return `${detalleBase}, Vehículo Preferido: ${vehiculoInfo}`;
    }
  }
  
  // Ejemplo de uso
  
  // Crear instancias de conductores
  const conductor1 = new Conductor('Juan Pérez', 'A12345');
  const conductorVIP1 = new ConductorVIP('Ana Gómez', 'B54321');
  
  // Crear instancias de vehículos
  const vehiculo1 = new Vehiculo('Toyota Corolla', 'XYZ-987');
  const vehiculo2 = new Vehiculo('Tesla Model X', 'ABC-123');
  
  // Crear instancias de rutas
  const ruta1 = new Ruta('Centro', 'Aeropuerto', 1.5);
  const ruta2 = new Ruta('Plaza', 'Terminal', 0.8);
  
  // Asignar conductores a rutas
  ruta1.asignarConductor(conductor1);
  ruta2.asignarConductor(conductorVIP1);
  
  // Asignar vehículo preferido al conductor VIP
  conductorVIP1.asignarVehiculoPreferido(vehiculo2);
  
  // Mostrar detalles
  console.log(conductor1.obtenerDetalle());
  console.log(conductorVIP1.obtenerDetalle());
  console.log(vehiculo1.obtenerInfo());
  console.log(ruta1.obtenerDetalle());
  