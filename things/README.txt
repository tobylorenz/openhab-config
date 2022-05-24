Most devices are supported via multiple bindings. I provided configs for all possible ways:
* SolarEdge
  * Modbus TCP binding (via local IP connection)
  * SolarEdge binding (via SolarEdge Cloud)
  * MQTT binding (via Web Set App GUI)
    * Web Set App GUI is available at 172.16.0.1 on a private WiFi network.
    * Data from Web Set App GUI exchanges data via Google Protobuf.
    * Protobuf definitions are available here: https://github.com/tobylorenz/solaredge-web-set-app
    * I wrote an application solaredge2mqtt, which retrieves data from protobuf and stores it on my local MQTT server.
* eHZ
  * MQTT binding
    * I wrote an application sml2mqtt, which retrieves data from eHZ and stores it on my local MQTT server.
    * sml2mqtt makes use of libsml library, available here: https://github.com/volkszaehler/libsml.git
* Worx Landroid L1000 (WR147.1)
  * MQTT binding
    * The mower is an IoT devices that stores its data via MQTT in the AWS cloud.
    * I configured my local MQTT server to contain a bridge to the AWS MQTT data.
