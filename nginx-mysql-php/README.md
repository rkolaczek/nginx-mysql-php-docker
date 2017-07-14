#Installation

1. Clone repository do dir _project_
2. In dir _project_ create folder _app_ and copy there symfony2 project, create dir _mysql_ for database lib folder
3. Copy _configuration/vhost.conf.dist_ to _configuration/vhost.conf_ and change _server_name_ value, put the same value to your host _/etc/host_ as 127.0.0.1
4. Copy _docker-compose.yml.dist_ to _docker-compose.yml_ file and change configuration as you wish
5. Run: 

        docker-compose up