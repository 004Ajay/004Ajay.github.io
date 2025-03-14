Useful Commands and Codes
=========================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

.. _torch_commands:

Torch / PyTorch
===============

1. **Check if Torch can find your GPU**

   .. code-block:: python
      
      import torch; torch.cuda.is_available()

   - It should return ``True``; otherwise, Torch cannot find your GPU.


.. _conda_commands:

Anaconda / Conda
=================

1. **Create a new conda environment**

   .. code-block:: bash
      
      conda create -n env_name

2. **Create a new conda environment with a specific Python version and libraries**

   .. code-block:: bash
      
      conda create -n env_name python=3.11 pandas matplotlib

3. **Deactivate a conda environment**

   .. code-block:: bash
      
      conda deactivate

4. **Remove a conda environment**

   .. code-block:: bash
      
      conda remove -n env_name --all


.. _docker_commands:

Docker Commands
===============

1. **List all Docker containers (including stopped ones)**

   .. code-block:: bash
      
      docker ps -a

2. **List all Docker images**

   .. code-block:: bash
      
      docker images

3. **See hardware usage of running Docker images**

   .. code-block:: bash
      
      docker stats

4. **Remove a Docker container**

   .. code-block:: bash
      
      docker rm -f <container_id>

5. **Enter the shell of a running Docker container**

   .. code-block:: bash
      
      sudo docker exec -it <container_id> /bin/bash

6. **Run Open-WebUI using Docker to make it accessible across the network**

   .. code-block:: bash
      
      sudo docker run -d --network=host -v open-webui:/app/backend/data \
      -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
      --name open-webui-main --restart always \
      ghcr.io/open-webui/open-webui:cuda


.. _scp_commands:

SCP (Secure Copy)
=================

1. **Send a file from your local computer to a remote machine**

   .. code-block:: bash
      
      scp [options/flags] path/to/local/file remote_user@remote_ip:/path/to/destination

   - Find your ``remote_user`` using the ``whoami`` command.
   - Find your remote machine's IP address using ``hostname -I``.

   **Example:**

   .. code-block:: bash
      
      scp -r ./models appuser@192.168.1.229:/usr/share/ollama/.ollama/models


.. _rsync_parallel_commands:

Rsync and Parallel for Fast File Transfers
==========================================
Find 
rsync
(Stay tuned! It's coming soon)