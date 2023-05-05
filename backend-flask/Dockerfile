FROM 413901507521.dkr.ecr.us-east-1.amazonaws.com/cruddur-python:3.10-slim-buster

# InsideContainer
# make a new folder inside container
WORKDIR /backend-flask

# Outside Container -> Inside Container
# this contains the libraries want to install to run the app
COPY requirements.txt requirements.txt

# Inside container
# Install the python libraries used for the app
RUN pip3 install -r requirements.txt

# Outisde Container -> Inside Container
# . means everythin in the current directory
# first period . -/backend-flask (outside container)
# second period . /backend-flask (inside container)
COPY . .

# Set Environment Variables
# Inside Container and will remerin set when the container is running
ENV PYTHONUNBUFFERED=1

EXPOSE ${PORT}

#COPY script.sh /script.sh
#RUN chmod +x /script.sh

#CMD (Command)
#python3 -m flask run --host=0.0.0.0 --port=4567

#ENTRYPOINT [ "/script.sh" ]
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=4567", "--debug"]

